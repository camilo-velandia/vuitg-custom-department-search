import React from 'react';

type Props={
  departments:[Category]
  handleSetSlug: any
}

type Category ={
  id: number
  name: string
  slug: string
}

const DepartmentGroup = ({departments,handleSetSlug}:Props) => {

  const onHandleSetSlug = (event:any) =>{
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  }

  const departmetOptions = departments.map((department:Category)=>{
    return(
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>
    )
  })

  return (
    <select defaultValue='' onChange={onHandleSetSlug}>
      <option disabled value="value0">Seleccione una opcion</option>
      {
        departmetOptions
      }
    </select>
  );
};

export default DepartmentGroup;
