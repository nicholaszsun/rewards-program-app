import TinyTordandoLevels from "../data/tinytornadolevels.json"

export  const getContentByLevel = (userLevel)=>{
    return TinyTordandoLevels.find((level)=> level.id === userLevel) || "null"
  }