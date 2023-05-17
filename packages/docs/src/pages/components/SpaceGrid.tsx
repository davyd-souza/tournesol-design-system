// DEPENDENCY
import { colors, space } from '@tournesol-ui/tokens'
import { Unstyled } from '@storybook/blocks'

// STYLE
import '../../styles/space-grid.css'

export function SpaceGrid() {
  return (
    <Unstyled>
      <table className="token-table">
        <caption className="token-table__title">
          Spacing scale and values
        </caption>

        <thead>
          <tr className="token-table__row">
            <th>Name</th>
            <th>Size</th>
            <th>Pixels</th>
            <th className="token-table__data-preview sr-only">Preview</th>
          </tr>
        </thead>

        <tbody className="token-table__body">
          {Object.entries(space).map(([key, value]) => {
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
                  <div
                    style={{
                      width: valueInPx,
                      backgroundColor: colors.yellow400,
                    }}
                    className="table-token__space-preview"
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Unstyled>
  )
}
