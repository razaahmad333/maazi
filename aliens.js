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
        points: 30
    },
    {
        name: 'Alien 4',
        color: 'yellow',
        points: 40
    },
    {
        name: 'Alien 5',
        color: 'purple blue violet',
        points: 50
    }
    
]

const powerizer = (alien) => {
    return {
        ...alien,
        points: alien.points * 2
    }
}

