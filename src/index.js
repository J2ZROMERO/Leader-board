import _ from 'lodash';
import lielement from './modules/data';
import './style.css';






let uldata = document.querySelector('.scores')

uldata.innerHTML += lielement.generateElement("carlos",100)
uldata.innerHTML += lielement.generateElement("patrick",300)
uldata.innerHTML += lielement.generateElement("julian",10)
uldata.innerHTML += lielement.generateElement("david",1005)
uldata.innerHTML += lielement.generateElement("juan manuel",6100)
uldata.innerHTML += lielement.generateElement("lucy",108)
uldata.innerHTML += lielement.generateElement("carla",10560)


