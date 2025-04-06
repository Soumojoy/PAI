function generatTags(events){
    const tags= events.map(event=>{
        const words=event.trim().split(/\s+/);
        const camelCase= words.map((word,index)=>
        index==0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join('')
        return `#${camelCase}`
    })
    const validTags=tags .filter(tag=> tag.length>=8)
    const toptags= validTags.sort((a,b)=> b.length-a.length).slice(0,3)
    console.log(toptags)
}
generatTags([
  "summer fest",
  "code camp",
  "js",
  "new year party",
  "tech talk",
  "AI"
])
