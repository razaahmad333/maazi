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
    {
        name: "Alien 6",
        color: "purple",
        points: 39,
        weapon: 'teeth'
    }
]


const powerizer = (alien) => {
    return {
        ...alien,
        color: getColorForAlien(alien.points * 2),
        points: alien.points * 2
    }
}

const getColorForAlien = (points) => {
    if (points <= 10) {
        return 'red'
    } else if (points <= 20) {
        return 'green'
    } else if (points <= 30) {
        return 'blue'
    } else if (points <= 40) {
        return 'yellow'
    } else if (points <= 50) {
        return 'purple'
    } else {
        return 'black'
    }
}
