import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [step, setStep] = useState(1)
  const [history, setHistory] = useState([])

  function addHistory(text) {
    // sabse nayi entry upar, sirf last 5 rakho
    setHistory([text, ...history].slice(0, 5))
  }

  function increase() {
    setNum(num + step)
    addHistory(`+${step}  →  ${num + step}`)
  }

  function decrease() {
    setNum(num - step)
    addHistory(`-${step}  →  ${num - step}`)
  }

  function reset() {
    setNum(0)
    setHistory([])
  }

  const status =
    num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero'

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">Counter</h2>
        <p className="subtitle">Step choose karo, phir count badhao ya ghatao.</p>

        <h1 className={`count ${status}`}>{num}</h1>

        <div className="steps">
          {[1, 5, 10].map((s) => (
            <button
              key={s}
              className={step === s ? 'chip active' : 'chip'}
              onClick={() => setStep(s)}
            >
              Step {s}
            </button>
          ))}
        </div>

        <div className="actions">
          <button className="button minus" onClick={decrease}>
            Decrease
          </button>
          <button className="button plus" onClick={increase}>
            Increase
          </button>
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>

        <div className="history">
          <h3>Recent changes</h3>
          {history.length === 0 ? (
            <p className="empty">Abhi koi change nahi. Increase dabao.</p>
          ) : (
            <ul>
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App