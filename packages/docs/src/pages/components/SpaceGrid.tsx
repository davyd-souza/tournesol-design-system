// DEPENDENCY
import { colors, space } from '@tournesol-ui/tokens'
import { Unstyled } from '@storybook/blocks'

// STYLE
import '../../styles/space-grid.css'

export function SpaceGrid() {
  return (
    <Unstyled>
      <table className="table">
        <caption className="table__title">Spacing scale and values</caption>

        <thead className="table__header">
          <tr className="table__header-row">
            <th>Name</th>
            <th>Size</th>
            <th>Pixels</th>
            <th className="table__space-preview sr-only">Preview</th>
          </tr>
        </thead>

        <tbody className="table__body">
          {Object.entries(space).map(([key, value]) => {
            const isRem = value.toString().indexOf('rem') !== -1

            const valueInPx = isRem
              ? Number(value.toString().replace('rem', '')) * 16
              : Number(value.toString().match(/[+-]?\d+(\.\d+)?/g))

            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
                <td>{valueInPx}px</td>
                <td className="table__space-preview">
                  <div
                    style={{
                      width: valueInPx,
                      backgroundColor: colors.yellow400,
                    }}
                    className="space-preview"
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
