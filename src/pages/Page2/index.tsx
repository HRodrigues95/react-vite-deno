import { useState, useEffect } from 'react'
import { toCamelCase, compareSimilarity } from 'jsr:@std/text';

export default function Page2() {
  const [currentCompare, setCurrentCompare] = useState('Hom')
  const [isCamelCase, setIsCamelCase] = useState(false)

  const result = [
    'Home',
    'House',
    'Living',
    'Exercise',
    'Exercising',
    'Expert',
  ].sort(compareSimilarity(currentCompare))

  return (
    <div>
      <h2>Page2</h2>

      <p>
        This is the Page2 page. Check browser console to see the output of the Deno read file operation.
      </p>

      <div>
        <div>
          <div>
            Convert to camelCase
            <input type='checkbox' checked={isCamelCase} onChange={(e) => setIsCamelCase(e.target.checked)} />
          </div>

          {isCamelCase ? toCamelCase('hello world') : 'hello world'}
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
