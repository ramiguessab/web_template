import * as Switch from '@components/utils/Switch'

const test = 'ha'

export default function Home() {
    return (
        <main>
            <Switch.Root on={test}>
                <Switch.Case type="case" inCase={'hi'}>
                    Correct
                </Switch.Case>
                <Switch.Case type="case" inCase={'hello'}>
                    Correct 2
                </Switch.Case>

                <Switch.Case type="default">This is Default</Switch.Case>
            </Switch.Root>
            {/* <h1>Hello From Next Js template</h1> */}
        </main>
    )
}
