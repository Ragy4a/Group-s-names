const arrGroups = [
    'FE2021-5',
    'Fe2020-2',
    'FD2021',
    'fD2022-1',
    'FE2020-3',
    'FD2020/2',
    'fe2021-3',
    'FD2020$5',
    'FE2008-52',
    'Fm2008-23',
    'FM2022-1',
];

function checkGroupNames (obj) {
    const regExp = /^(?<name>FD|fd|FM|fm|FE|fe)20\d{2}(?:-\d+)?$/;

    obj.forEach(group => {
        if (regExp.test(group)) {
            console.log(`Success: ${group}`);
        } else {
            console.log(`Error:   ${group}`);
        }
    })
};

checkGroupNames (arrGroups);