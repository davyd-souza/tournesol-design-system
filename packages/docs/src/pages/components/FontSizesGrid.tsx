// DEPENDENCY
import { fontSizes } from '@tournesol-ui/tokens'
import { Unstyled } from '@storybook/blocks'

export function FontSizesGrid() {
  return (
    <Unstyled>
      <table className="token-table">
        <caption className="token-table__title">Font sizes and values</caption>

        <thead>
          <tr className="token-table__row">
            <th>Name</th>
            <th>Value</th>
            <th>Pixels</th>
            <th className="token-table__data-preview sr-only">Preview</th>
          </tr>
        </thead>

        <tbody className="token-table__body">
          {Object.entries(fontSizes).map(([key, value]) => {
            const isRem = value.toString().indexOf('rem') !== -1

            const valueInPx = isRem
              ? Number(value.toString().replace('rem', '')) * 16
              : Number(value.toString().match(/[+-]?\d+(\.\d+)?/g))

            return (
              <tr key={key} className="token-table__row">
                <td>{key}</td>
                <td>{value}</td>
                <td>{valueInPx}px</td>
                <td className="token-table__data-preview">
                  {valueInPx < 48 ? (
                    <span
                      style={{ fontSize: value }}
                      className="token-table__info-preview"
                    >
                      Big ball of wibbly wobbly, timey wimey stuff
                    </span>
                  ) : (
                    <span
                      style={{ fontSize: value }}
                      className="token-table__info-preview"
                    >
                      Timey wimey
                    </span>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Unstyled>
  )
}
