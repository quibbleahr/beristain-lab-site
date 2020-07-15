import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {StickyContainer, Sticky} from 'react-sticky';

import Title from '../components/Title';
import MenuBar from '../components/MenuBar';

function HomePage(props) {
    return(
        <div>
            <StickyContainer>
                    <Title name="Beristain Lab"/>
                    <MenuBar/>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat, enim a posuere pulvinar, ligula tortor interdum massa, consectetur congue orci leo sed velit. Quisque cursus malesuada ipsum, a lobortis nibh egestas quis. Donec suscipit arcu nec laoreet lacinia. Aliquam ac consectetur purus. Nullam volutpat tellus a eleifend hendrerit. Phasellus sed quam at nulla ultrices feugiat at in eros. Nulla gravida, felis quis porttitor sagittis, mi urna rhoncus arcu, quis imperdiet libero enim vel felis. Pellentesque rhoncus cursus porttitor. Nunc at turpis pellentesque, rutrum dolor in, blandit eros.

Duis bibendum quis odio aliquam finibus. Phasellus eget ipsum non lorem rhoncus viverra. Pellentesque id nunc at quam luctus scelerisque et sed nisi. Phasellus semper mollis ex id ullamcorper. Vestibulum venenatis massa ligula, in fringilla odio hendrerit quis. Aenean quis justo eget odio iaculis tempor porttitor vel nibh. Nunc ac dolor sapien. Praesent dapibus ante pellentesque turpis sollicitudin luctus. Nunc et sem quis elit euismod blandit. Nulla eget diam et massa efficitur auctor. In luctus felis posuere lacus dictum, porttitor suscipit lorem congue. Mauris sed viverra magna. Duis gravida vitae ex vitae hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at egestas eros, ac malesuada quam. Integer posuere tellus in felis dignissim consequat.

Sed ut efficitur leo. Etiam bibendum, dolor id ultrices molestie, dui enim ultricies dolor, et laoreet ligula nunc ac ex. Donec dolor nisi, vulputate eu malesuada ac, euismod vestibulum metus. Integer ut magna purus. Etiam sit amet condimentum mauris. Nulla lobortis fringilla diam, sit amet sollicitudin elit pulvinar sit amet. Vivamus feugiat nisi magna. Pellentesque ante libero, eleifend at orci eu, sollicitudin vulputate diam. Integer eu lacus elit. Mauris et nibh eget ipsum tincidunt pharetra non sed dui. Nunc dictum dictum arcu id vulputate. In tristique nibh sit amet tellus ultricies ornare. In volutpat placerat lacus, dignissim tristique turpis auctor at. Sed sit amet sagittis tellus. Ut vestibulum tellus id ante scelerisque fringilla. Duis eget ipsum mattis, iaculis ex condimentum, tincidunt nisi.

Aliquam sit amet varius diam, et dignissim libero. Nullam cursus neque at purus ornare, in volutpat erat tristique. Sed et dolor eget lorem egestas ullamcorper. Praesent ut ex eget enim suscipit consequat. Nulla fermentum mollis neque id commodo. Duis molestie tempus vehicula. Duis sollicitudin, orci vulputate tempor bibendum, velit sapien ultrices urna, a volutpat orci erat id odio. Etiam quis nibh lacus. Donec lacus massa, maximus vitae tempus sed, sodales nec tellus. Suspendisse fringilla nunc in neque suscipit efficitur. Quisque id turpis eu elit cursus porta. Aliquam sodales fermentum fermentum. Etiam molestie iaculis neque nec dapibus. Integer placerat orci luctus urna auctor placerat. Aenean tellus augue, scelerisque et venenatis non, sollicitudin vel elit. Integer enim risus, mollis eget facilisis a, tristique et ligula.

Pellentesque diam purus, varius in purus vitae, viverra ornare felis. Morbi id turpis lacinia, egestas nisi non, fringilla urna. Integer elementum iaculis magna, eget aliquam tortor pretium et. Sed feugiat est justo, quis hendrerit nunc pharetra nec. Suspendisse ut consequat elit. Nulla vel scelerisque sem. Curabitur non tempus magna. Integer ullamcorper quis libero sed commodo. Integer venenatis elit metus, id maximus elit mollis nec. Aenean imperdiet ultrices eros, et accumsan enim semper id. Maecenas eu risus magna. Vivamus pretium consectetur elit. Pellentesque mattis libero a purus ultrices rutrum. In nec suscipit tellus.</h2>
                
            </StickyContainer>
            
            
        </div>
    )
}

export default HomePage;