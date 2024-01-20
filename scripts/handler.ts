import * as fs from 'node:fs'

const script_arguments = process.argv

if (script_arguments.length < 3) {
    throw Error('Expected Command Name')
}

const command = script_arguments.at(2)

const argument = script_arguments.at(3)

switch (command) {
    case 'create': {
        if (!argument) {
            throw new Error('Schema name must be provided')
        }

        const new_handler_path =
            __dirname + `/../backend/lib/handlers/${argument}.ts`

        fs.copyFileSync(
            __dirname + '/templates/handler/handler_template.ts',
            new_handler_path
        )

        const new_handler_test_path =
            __dirname + `/../backend/lib/handlers/${argument}.test.ts`

        fs.copyFileSync(
            __dirname + '/templates/handler/handler_template.test.ts',
            new_handler_test_path
        )

        const handler_test_file = fs.readFileSync(
            new_handler_test_path,
            'utf-8'
        )

        let new_handler_test_content = handler_test_file.replace(
            "template from './handler_template'",
            `${argument} from '@handlers/${argument}'`
        )

        new_handler_test_content = new_handler_test_content.replace(
            '/* eslint no-unused-vars: 0  */\n',
            ''
        )

        fs.writeFileSync(new_handler_test_path, new_handler_test_content)

        break
    }
    default: {
        console.log('Command not found')
    }
}
