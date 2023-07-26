const modules = [
    {
        id: 1,
        key: "1",
        label: "Module 1",
        subModules: [
            {
                id: 1,
                key: "1",
                label: "Module 1 -> SubModule 1",
                menus: [
                    {
                        id: 1,
                        key: "1",
                        label: "Module 1 -> SubModule 1 -> Menu 1"
                    },
                    {
                        id: 2,
                        key: "2",
                        label: "Module 1 -> SubModule 1 -> Menu 2"
                    },
                    {
                        id: 3,
                        key: "3",
                        label: "Module 1 -> SubModule 1 -> Menu 3"
                    }
                ]
            },
            {
                id: 2,
                key: "2",
                label: "Module 1 -> SubModule 2"
            }
        ]
    },
    {
        id: 2,
        key: "2",
        label: "Module 2",
        subModules: [
            {
                id: 1,
                key: "1",
                label: "Module 2 -> SubModule 1"
            },
            {
                id: 2,
                key: "2",
                label: "Module 2 -> SubModule 2"
            },
            {
                id: 3,
                key: "3",
                label: "Module 2 -> SubModule 3",
                menus: [
                    {
                        id: 1,
                        key: "1",
                        label: "Module 2 -> SubModule 3 -> Menu 1"
                    },
                    {
                        id: 2,
                        key: "2",
                        label: "Module 2 -> SubModule 3 -> Menu 2"
                    },
                    {
                        id: 3,
                        key: "3",
                        label: "Module 2 -> SubModule 3 -> Menu 3"
                    }
                ]
            }
        ]
    }
]

// const path = [1, 1, 3];
// const path = [2, 3, 3];
const path = [2, 3, 4];

const itemTraced = path.reduce((source, currentId, idx) => {

    // console.log(`Source ${JSON.stringify(source)}`);
    // console.log(`CurrentId ${currentId}`);
    // console.log(`Idx ${idx}`);
    // console.log(`-----------------------------`);

    const obj = Array.isArray(source) ? source.find(item => item.id === currentId) : null;
    
    // console.log(obj)

    // for invalid indexes, obj might be undefined
    const keys =  obj ? Object.keys(obj) : null;
    
    // console.log(`Keys = ${keys}`)


    const entry = keys ? ( (keys.includes('subModules') && keys.indexOf('subModules')) 
                    || (keys.includes('menus') && keys.indexOf('menus')) ) : null;

    // console.log(`Entry = ${entry}`)
    
    // console.log(`Key = ${keys[entry]} Entry = ${entry}`)
    // console.log(`--------------------------------------------`)

    // last item is not an array
    // so there is no entry
    // so return the object directly
    return entry ? obj[keys[entry]] : obj;
}, modules);

console.log(itemTraced)