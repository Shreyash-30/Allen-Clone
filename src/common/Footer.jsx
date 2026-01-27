import { Link } from "react-router-dom";
export default function Footer(){
const footerLinks=[
    {
        key:"about-us",
        values:[
            {to:'about', label:'About us'},
            {to:'blog', label:'Blog'},
            {to:'news', label:'News'},
            {to:'policy', label:'Privacy policy'},
            {to:'team', label:'Our team'},
            {to: 'careers', label:'Careers'}
        ]
    },
    {
        key:'help',
        values:[
            {to:'support', label:'Support'},
            {to:'refund', label:'Refund policy'},
            {to:'terms', label:'Terms of service'},
            {to:'contact', label:'Contact us'}
        ]
    },
    {
        key:'social',
        values:[
            {to:'facebook', label:'Facebook'},
            {to:'twitter', label:'Twitter'},
            {to:'instagram', label:'Instagram'},
            {to:'linkedin', label:'LinkedIn'}
        ]
    }, 
    {
        key:'goals',
        values:[
            {to:'jee', label:'JEE Preparation'},
            {to:'neet', label:'NEET Preparation'},
            {to:'foundation', label:'Foundation courses'},
            {to:'skills', label:'Skill development'}
        ]
    },
    {
        key:'courses',
        values:[
            {to:'classroom', label:'Classroom courses'},
            {to:'online', label:'Online courses'},
            {to:'test-series', label:'Test series'},
            {to:'results', label:'Results'},
            {to:'admission', label:'Admission'}

        ]
    }

]
return(
        <>
            <footer className="bg-white border-y">
    <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0">
                <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-5">
                  {
                    footerLinks.map(section => (
                      <div key={section.key}>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{section.key}</h2>
                        <ul className="text-gray-500 font-medium">
                          {section.values.map(link => (
                            <li key={link.to}>
                              <Link to={link.to} className='hover:underline'>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  }
                </div>
            </div>

        </div>
        </div>
            </footer>

        </>
    )
}

function mapFooterLink(to,label){
    return(
        <>
          <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">About</h2>
                        <ul className="text-gray-500 font-medium">
                            <li>
            <Link to={to} className='hover:underline'>{label}</Link>
        </li>
                        </ul>
                    </div>
       
        </>
    )
}