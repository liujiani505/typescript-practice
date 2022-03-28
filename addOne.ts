function toDoOnEachLoop (item: string, index:number) {
    const num:number = parseInt(item)
    console.log(num + 1)
}

Deno.args.forEach(toDoOnEachLoop)

