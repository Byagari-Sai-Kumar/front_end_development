type RandomNumberProps = {
    randomNumber: number
}

type IsPositive = RandomNumberProps & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type IsNegative = RandomNumberProps & {
    isPositive?: never
    isNegative: boolean
    isZero?: never
}

type IsZero = RandomNumberProps & {
    isPositive?: never
    isNegative?: never
    isZero: boolean
}

type RandomNumberPropsTypes = IsPositive | IsNegative | IsZero;

export const RandomNumber = ({randomNumber,isPositive,isNegative,isZero}: RandomNumberPropsTypes) => {
    return(
        <div>
            {randomNumber} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
        </div>
    )
}