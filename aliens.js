const aliens = [
    {
        name: 'Alien 1',
        color: 'red',
        points: 10,
        weapon: 'blaster',
    },
    {
        name: 'Alien 2',
        color: 'green',
        points: 20,
        weapon: 'blaster',

    },
    {
        name: 'Alien 3',
        color: 'blue',
        points: 30,
        weapon: 'blaster',

    },
    {
        name: 'Alien 4',
        color: 'yellow',
        points: 40,
        weapon: 'blaster',

    },
    {
        name: 'Alien 5',
        color: 'orange',
        points: 50,
        weapon: 'blaster',

    },
]


const powerizer = (alien) => {
    return {
        ...alien,
        points: alien.points * 2
    }
}



