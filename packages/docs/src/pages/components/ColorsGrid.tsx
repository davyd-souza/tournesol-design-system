// DEPENDENCY
import { colors } from '@tournesol-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    let contrastColor: string

    if (color[0] !== '#') {
      contrastColor = '#fff'
    } else {
      contrastColor = getContrast(color, '#fff') < 3.5 ? '#000' : '#fff'
    }

    return (
      <article key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            color: contrastColor,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </article>
    )
  })
}
