function Expert ({label, scorce}: {label: string, scorce: number}){

    const arrs = [1,2,3,4,5];
  
    return (
      <div className='flex items-center justify-between'>
        <div>{label}</div>
        <div className='flex gap-x-1'>
          {
            arrs.map((item)=>{
              return (
                <>
                {
                  item > scorce ? (
                    <span className='w-[10px] h-[10px] rounded-full flex bg-white'></span>
                  ) : (
                    <span className='w-[10px] h-[10px] rounded-full flex bg-orange-400'></span>
                  )
                }
                </>
                
                
              )
            })
          }
          
        </div>
      </div>
    )
  }
  
export default Expert