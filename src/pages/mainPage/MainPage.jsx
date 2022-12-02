import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import DetailCart from "../../components/DetailCart/DetailCart";
import Layout from "../../components/Layaut/Layout";
import { getPhotos } from '../../redux/action/photos';

function MainPage() {

  const photos = useSelector(state => state.photos.photos)
  const loading = useSelector(state => state.photos.isPhotosLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPhotos())
  }, [])

  return (
    <div>
      <Layout nickName={'Artem'} id={1}>
        <div className='mainPageRoot'>
          {/* <InfiniteScroll>

          </InfiniteScroll> */}
        </div>
        <DetailCart 
            userName={'Artem'}
            userId={1}
            imageUrl='https://cdn.maxvandaag.nl/2023/10/Z4gSZwCo-gekke-5-minuten-shutterstock-900x500-1-890x500.jpg'
            likes={10}
            isLikedByYou={true}
            comments={[{text: 'Hello world', nickName: 'Anna'},
            {text: 'Hello world', nickName: 'Anna'},
            {text: 'Hello world', nickName: 'Anna'},
            {text: 'Hello world', nickName: 'Anna'},
            {text: 'Hello world', nickName: 'Anna'},{text: 'Hello world', nickName: 'Anna'},{text: 'Hello world', nickName: 'Anna'},]}
        />
      </Layout>
    </div>
  );
}
export default MainPage;
