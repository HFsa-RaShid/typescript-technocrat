const createWithGeneric = <T>(param: T): T[]=>{
    return [param];
};

const resGeneric = createWithGeneric<string>('Bangladesh');
// const resObject = createWithGeneric<{id: number; name: string}>({id:23, name:'Hafsa'});
type User = {id: number; name: string};
const resObject = createWithGeneric<User>({
    id:23,
    name:'Hafsa'
});



// withTuple

const createWithTuple = <T, Q>(param1: T, param2: Q): [T, Q]=>{
    return [param1, param2];
}
const re1= createWithTuple<string, number>('Bangladesh', 223);
const res2= createWithTuple<string, {name: string}>('Bangladesh', {name:'Asia'});



const addCourseToStudent = <T>(student: T)=> {
    const course = 'Next Level'

    return{
        ...student,
        course
    }
}
const student1 = addCourseToStudent({name: 'Mr. X', email:'x@gmail.com'})
const student2 = addCourseToStudent({name: 'Mr. Y', email:'y@gmail.com', watch: 'Apple'})