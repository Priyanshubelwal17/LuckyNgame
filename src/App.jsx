
import LuckyN from './LuckyN';



function allSameValue(dice) {
  return dice.every((v) => v === dice[0])
}



function App() {


  return (
    <>
      <LuckyN wincheck={allSameValue} title='all same value' />
      {/* <PracticeDie /> */}
      {/* <LuckyN numDice={3} goal={8} /> */}
      {/* <LuckyN numDice={3} goal={8} /> */}

    </>
  )
}

export default App
