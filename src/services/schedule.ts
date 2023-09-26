 const getSchedule = async () =>{
    const response = await fetch('http://localhost:3000/schedules',{
        method:'GET',
        headers:{
            'Content-type':'apllication/json; chartset=UTF-8'
        }
    });
    if(response.status === 200){
        return response.json();
    }
    throw new Error('Something went wrong')
 }

 const getScheduleLogs = async (id:number) =>{
    const response = await fetch('http://localhost:3000/scheduleLogs?scheduleId='+id,{
        method:'GET',
        headers:{
            'Content-type':'apllication/json; chartset=UTF-8'
        }
    });
    if(response.status === 200){
        return response.json();
    }
    throw new Error('Something went wrong')
 }

 const updateSchedule = async (payload:any) =>{
    // const response = await fetch('http://localhost:3000/schedules',{
    //     method:'PUT',
    //     body:JSON.stringify(payload),
    //     headers:{
    //         'Content-type':'apllication/json; chartset=UTF-8'
    //     }
    // });
    // if(response.status === 200){
    //     return response.json();
    // }
    // throw new Error('Something went wrong')
    console.log('put method is not working with the exisiting mock server ', payload);
 }



 export default {
    getSchedule,
    getScheduleLogs,
    updateSchedule
};