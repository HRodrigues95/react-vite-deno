
export default function Page1() {
  return (
    <div>
      <h2>Page1</h2>

      <p>
        This is the Page1 page
      </p>

      <button onClick={() => globalThis.history.back()}>Go back</button>
    </div>
  )
}
