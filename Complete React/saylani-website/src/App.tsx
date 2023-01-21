
import SaylaniAbout from './components/about/SaylaniAbout';
import { SaylaniHeader } from './components/header/SaylaniHeader';
import SaylaniHome from './components/home/SaylaniHome';
import { Routes, Route } from 'react-router-dom'
import StickyFooter from './components/footer/StickyFooter';
import SaylaniMedia from './components/media/SaylaniMedia';

function App() {
  let items = ['COURSES AVAILABLE', 'Saylani Mass IT Training program is an institute who delivers Latest IT education (FREE OF COST) to the youth of country to make Pakistan technically strong and to promote Entrepreneurship and startup culture in Pakistan.'];
  let items2 = ['OUR MOTIVE', "We are committed to developing more than 1 million software developers, which will add about 100 billion annually to Pakistan's economy and help ease the debt burden on Pakistan Saylani Welfare Trust is a name that needs no introduction today. The journey this team embarked upon was made possible owing to their zeal, enthusiasm & commitment to the society and by the grace of Allah (SWT), it has become a name that we need and not just the one we want. I wish Saylani’s team all the success and blessing that they deserve for future, May God bless Saylani and ensure prosperity and happiness for our people, Ameen!"];
  console.log(window.location)

  return (
    <>
       <SaylaniHeader/>
       <Routes>
        <Route path='/home/SaylaniHome.tsx' element={<SaylaniHome/>}/>
        <Route path='/about/SaylaniAbout.tsx' element={<SaylaniAbout/>}/>
        <Route path='/media/SaylaniMedia.tsx' element={<SaylaniMedia/>}/>                    
        </Routes>
      <StickyFooter/>
      
    </>
  );
}

export default App;
