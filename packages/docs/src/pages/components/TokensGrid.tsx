// DEPENDENCY
import { ReactNode } from 'react'
import { Unstyled } from '@storybook/blocks'

// TYPE
type TokensGridProps<TData> = {
  tokens: TData[]
  title: string
}

export function TokensGrid<TData>({ tokens, title }: TokensGridProps<TData>) {
  return (
    <Unstyled>
      <table className="token-table">
        <caption className="token-table__title">{title}</caption>

        <thead>
          <tr className="token-table__row">
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody className="token-table__body">
          {Object.entries(tokens).map(([key, value]) => (
            <tr key={key} className="token-table__row">
              <td>{key}</td>
              <td>{value as ReactNode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Unstyled>
  )
}
