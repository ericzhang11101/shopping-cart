import uniqid from 'uniqid'
let arr = []

function Seal(name, img, tags, price, id){
    this.name = name
    this.img = img
    this.tags = tags
    this.price = price
    this.id = id
}

arr.push(
    new Seal(
        'Chungus', 
        'https://i.imgur.com/9zfHCXP_d.webp?maxwidth=760&fidelity=grand',
        ['stuffed', 'gray', 'baby', 'extra large'],
        9999999,
        uniqid()
        )
)

arr.push(
    new Seal(
        'Stella', 
        'https://i.imgur.com/TuL40g0.jpg',
        ['baby', 'gray', 'medium', 'stuffed'],
        9999999,
        uniqid()
        )
)

arr.push(
    new Seal(
        'Alfred', 
        'https://i.imgur.com/lEr6O5N_d.webp?maxwidth=760&fidelity=grand',
        ['white', 'real', 'large', 'adult'],
        200,
        uniqid()
        )
)

arr.push(
    new Seal(
        'Bob', 
        'https://i.imgur.com/xnWpP7V_d.webp?maxwidth=760&fidelity=grand',
        ['baby', 'gray', 'real', 'small'],
        150,
        uniqid()
        )
)

arr.push(
    new Seal(
        'Chungus Cousin', 
        'https://i.imgur.com/IgmNFft_d.webp?maxwidth=760&fidelity=grand',
        ['stuffed', 'gray', 'baby', 'large'],
        100,
        uniqid()
        )
)


arr.push(
    new Seal(
        'George', 
        'https://i.imgur.com/Lxsqfg4_d.webp?maxwidth=760&fidelity=grand',
        ['baby', 'white', 'small', 'real'],
        200,
        uniqid()
        )
)

arr.push(
    new Seal(
        'Mike', 
        'https://i.imgur.com/GXEexPi_d.webp?maxwidth=760&fidelity=grand',
        ['adult', 'gray', 'extra large', 'real'],
        300,
        uniqid()
        )
)

arr.push(
    new Seal(
        'Robert', 
        'https://i.imgur.com/IfHpvUB_d.webp?maxwidth=760&fidelity=grand',
        ['teen', 'brown', 'extra large', 'real'],
        250,
        uniqid()
        )
)


arr.push(
    new Seal(
        'Square ', 
        'https://i.imgur.com/RVFndG7_d.webp?maxwidth=760&fidelity=grand',
        ['baby', 'white', 'medium', 'stuffed'],
        20,
        uniqid()
        )
)




arr.push(
    new Seal(
        'Steve', 
        'https://i.imgur.com/BMr75WL_d.webp?maxwidth=760&fidelity=grand',
        ['teen', 'brown', 'medium', 'real'],
        200,
        uniqid()
        )
)

arr.push(
    new Seal(
        'Toy Seal ', 
        'https://i.imgur.com/1S0AA0G_d.webp?maxwidth=760&fidelity=grand',
        ['baby', 'gray', 'small', 'stuffed'],
        30,
        uniqid()
        )
)

export default arr