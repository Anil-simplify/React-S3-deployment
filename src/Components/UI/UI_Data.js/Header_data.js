import logo from "../../../assets/Dkafka_Name_with_Wings.svg"
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import PhoneIcon from '@mui/icons-material/Phone';
import CodeIcon from '@mui/icons-material/Code';
import HubIcon from '@mui/icons-material/Hub';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const Header_data={
  Image_Path: logo,
  Tab_labels: [
    "Home",
    "Products",
    "About Us",
    "Contact Us"
  ],
  Tab_Labels_nesting:{
    Products: [
      "Dev Ginni",
      "Ontology",
      "Picaso Simulation"
    ],
    "Contact Us": [
      "Phone",
      "email"
    ]
  },
  Tab_Labels_icon:{
    "Home":<HomeIcon/>,
    "Products": <CategoryIcon/>,
    "About Us": <PeopleIcon/>,
    "Contact Us": <PhoneIcon/>,
    "Dev Ginni" : <CodeIcon/>,
    "Ontology" : <HubIcon/>,
    "Picaso Simulation": <TrendingUpIcon/>
  },
  Buttton:"Login"
}