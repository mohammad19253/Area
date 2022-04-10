import { useEffect, useRef } from "react"

export default function Home() {
  const test = useRef()
  useEffect (()=>[
    console.log(test.current)
  ],[])
  return (
    <div  ref={test}>
      TEST
    </div>
  )
}
