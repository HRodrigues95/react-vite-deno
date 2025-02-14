import { useState } from 'react'
import { toCamelCase, compareSimilarity, toSnakeCase, toPascalCase, toKebabCase } from 'jsr:@std/text';

const DEMO_TEXT = 'Hello world im a demo text that is being used with Deno @std'
export default function Page2() {
  const [currentCompare, setCurrentCompare] = useState('Hom')
  const [textCase, setTextCase] = useState('camel')

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => { setTextCase(e.target.value) }

  const result = [
    'Home',
    'House',
    'Living',
    'Exercise',
    'Exercising',
    'Expert',
  ].sort(compareSimilarity(currentCompare))

  let displayText = DEMO_TEXT
  switch (textCase) {
    case 'camel':
      displayText = toCamelCase(DEMO_TEXT)
      break
    case 'pascal':
      displayText = toPascalCase(DEMO_TEXT)
      break
    case 'snake':
      displayText = toSnakeCase(DEMO_TEXT)
      break
    case 'kebab':
      displayText = toKebabCase(DEMO_TEXT)
      break
    default:
      break;
  }

  return (
    <div>
      <h2>Page2</h2>

      <div>
        <div>
          <p>Convert to camelCase</p>

          <select value={textCase} onChange={handleSelect}>
            <option value='camel'>camel</option>
            <option value='pascal'>pascal</option>
            <option value='snake'>snake</option>
            <option value='kebab'>kebab</option>
          </select>

          <p>{displayText}</p>
        </div>

        <div>
          <p>Sorted according to similarity to </p>
          <input
            type="text"
            value={currentCompare}
            onChange={(e) => setCurrentCompare(e.target.value)}
          />
        </div>
        <div>
          {result.map((item) => (<p key={item}>{item}</p>))}
        </div>
      </div>
    </div>
  )
}
