import { useState } from "react"

interface Props {
    normalizer: (value: string) => string
}

const normalizeValue = (value: string, normalizer: ((value: string) => string)) => {
    return normalizer(value)
}

export const Input = ({ normalizer }: Props) => {
    const [value, setValue] = useState('')

    return (
        <input type="text" onChange={(event) => {
            const { value } = event.target
            event.target.value = normalizeValue(value, normalizer)
        }} />
    )
}