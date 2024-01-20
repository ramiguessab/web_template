import * as fs from 'node:fs'

const script_arguments = process.argv

if (script_arguments.length < 3) {
    throw Error('Expected Command Name')
}

const command = script_arguments.at(2)

const argument = script_arguments.at(3)

const template_path = __dirname + '/templates/schema/schema_template.ts'

switch (command) {
    case 'create': {
        if (!argument) {
            throw new Error('Schema name must be provided')
        }
        const db_path = __dirname + '/../backend/db.ts'

        create_new_schema(argument)

        add_import(db_path, `* as ${argument}`, `@schemas/${argument}`)

        add_to_object(db_path, 'schema', `...${argument}`)

        break
    }
    default: {
        console.log('Command not found')
    }
}

function create_new_schema(schema_name: string) {
    const new_file_path = __dirname + `/../backend/schemas/${schema_name}.ts`
    fs.copyFileSync(template_path, new_file_path)

    const file = fs.readFileSync(new_file_path, 'utf-8')

    let new_file_content = file.replace(
        "schema = pgTable('schema'",
        `${schema_name} = pgTable('${schema_name}'`
    )

    new_file_content = new_file_content.replace(
        '/* eslint no-unused-vars: 0  */\n',
        ''
    )

    fs.writeFileSync(new_file_path, new_file_content)
}

function add_import(path: string, import_name: string, import_path: string) {
    let fileData = fs.readFileSync(path, 'utf-8')

    const imports = fileData
        .split('\n')
        .filter((line) => line.includes('import') && line.includes('from'))

    const old_imports = imports.join('\n')

    imports.push(`import ${import_name} from '${import_path}'`)

    const new_imports = imports.join('\n')

    const new_file = fileData.replace(old_imports, new_imports)

    fs.writeFileSync(path, new_file)
}

function add_to_object(path: string, object_name: string, added_value: string) {
    let fileData = fs.readFileSync(path, 'utf-8')

    let object_line = fileData
        .split('\n')
        .filter(
            (line) =>
                line.includes(`const ${object_name}`) ||
                line.includes(`let ${object_name}`)
        )[0]

    if (object_line) {
        const object_value = object_line
            .split('=')
            .map((token) => token.trim())[1]

        const no_curly = object_value
            .replace(/^\{/, '')
            .replace(/\}$/, '')
            .trim()

        const entries = no_curly.split(',').filter((entrie) => entrie !== '')

        entries.push(added_value)

        const new_line = object_line.replace(
            object_value,
            `{ ${entries.join(',')} }`
        )

        const new_file = fileData.replace(object_line, new_line)

        fs.writeFileSync(path, new_file)
    } else {
        throw new Error('Object does not existe')
    }
}
