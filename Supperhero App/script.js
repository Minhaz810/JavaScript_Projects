const Auth_Token=6258281680966061
const BASE_URL=`https://superheroapi.com/api.php/${Auth_Token}`
const randomHero=document.getElementById('randomHero')
const search=document.getElementById('searchInput')
const searchbtn=document.getElementById('search')
const herostats=document.getElementById('stats')
const getSuperHero=(id)=>{
  fetch(`${BASE_URL}/${id}`)
  .then(request=>request.json())
  .then(data=>{
    console.log(data)
    getPowerstat(data)})
    
}

const statemoji={
  'intelligence':'🧠',
  'strength': '💪',
  'speed':'⚡',
  'durability':'🏋️',
  'power':'💥',
  'combat':'⚔️'
}

const getPowerstat=(character)=>{
  const img=`<img src="${character.image.url}" height=400 width=400/>`
  const name=`<h1>${character.name}</h1>`
  const stats=Object.keys(character.powerstats).map(stat=>{
    return `<p>${stat.toUpperCase()}${statemoji[stat]}: ${character.powerstats[stat]}<p>`
  
  }).join('')
  document.querySelector('.superheroimage').innerHTML=`${name}<br>${img}<br>${stats}`
  }

// const img='https://www.superherodb.com/pictures2/portraits/10/100/639.jpg'
function randomid(){
  id=Math.floor(Math.random()*731)+1
  return id

}

randomHero.onclick=()=>{
  getSuperHero(randomid())
}
const herosearch=(name)=>{
  const Auth_Token=6258281680966061
  const BASE_URL=`https://superheroapi.com/api.php/${Auth_Token}/search`
  fetch(`${BASE_URL}/${name}`)
  .then(request=>request.json())
  .then(data=>{
    getPowerstat(data.results[0])

    // herostats.innerHTML=`<table><tr><td>Full Name:${hero.biography.full-name}</td></tr></table>`
  })

}
searchbtn.onclick=()=>{
  herosearch(search.value)
}
