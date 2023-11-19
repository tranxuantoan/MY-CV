
import './App.css'
import Contacts from './components/Contacts'
import AboutMe from './components/Contacts/AboutMe'
import Educations from './components/Contacts/Education'
import Expert from './components/Contacts/Expertise'
import List from './components/Contacts/PersonalSkill'
import Works from './components/Contacts/WORKEXPERIENCE'
import Avatars from './components/Contacts/img'

function App() {

  return (
    <>
      <div className='container mx-auto shadow-inner'>
        <div className='layout_wrapper flex justify-center'>
          <div className="col_left text-left bg-indigo-700 text-white w-[386px] px-[80px] ">
            <div><Avatars/> </div>
            <div className='text-[18px] font-bold my-[40px]'>CONTACT</div>
                  <div style={{color:"white"}} >
                    <Contacts name='Phone' desc='+84 905931797'/> <br />
                    <Contacts name='Email' desc='toantranxuan26062002@gmail.com'/> <br />
                    <Contacts name='Address' desc='Da Nang'/>
                    
                  </div>
            <div className='text-[18px] font-bold my-[40px]'>EXPERTISE</div>
                <div style={{color:"white"}}>
                  <Expert label='Ms Word' scorce={5}/>
                  <Expert label='Ms Excel' scorce={3}/>
                  <Expert label='Photoshop' scorce={4}/>
                  <Expert label='Illustrator' scorce={3}/>
                  <Expert label='Corel Draw' scorce={4}/>
            <div className='text-[18px] font-bold my-[40px] '>PERSONAL SKILL</div>  
                  <div className='mb-[40px]'>
                  <List name='Public Speaking'/>
                  <List name='Financial Management'/>
                  <List name='Creative Idea'/>
                  <List name='Project Manager'/>
                  <List name='Directer'/>   
                  </div>   
                
            </div>
          </div>  
        <div className='"col_right text-left bg-slate-100 w-[600px] px-[80px]"'>
              <div id='colorHeader' className=' pl-[40px] text-[50px] font-bold mt-[20px]'>AMADA</div>
              <div id='colorHeader' className=' pl-[40px] text-[45px] '>CASIE</div>
              <div id='colorHeader' className=' pl-[40px] text-[15px] font-bold'>WEB DEVOLOPER</div>
              <div className='px-[40px]'><AboutMe/></div>
              <div className='pl-[40px] text-[18px] font-bold mb-[40px]'>EDUCATION</div>
                  <div id='colorWork' className='px-[40px]'>
                      <Educations title='BACHELOR OF DESIGN' desc='University/Collage/Institute' time='2012-2015'/>
                      <Educations title='BACHELOR OF DESIGN' desc='University/Collage/Institute' time='2012-2015'/>
                  </div>
              <div className='pl-[40px] text-[18px] font-bold mb-[40px]'>WORK EXPERIENCE</div>
                  <div id='colorWork' className='px-[40px] pb-[50px]'>
                      <Works title='JOB TITLE COMPANY NAME' desc='University/Collage/Institute' time='2012 - 2015' txt='Definition about your job. Lorem ipsum dolor sit amet, deconsectetuer set adipiscing elit, sed dolore magna' />
                      <Works title='JOB TITLE COMPANY NAME' desc='University/Collage/Institute' time='2012 - 2015' txt='Definition about your job. Lorem ipsum dolor sit amet, deconsectetuer set adipiscing elit, sed dolore magna' />
                  </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
