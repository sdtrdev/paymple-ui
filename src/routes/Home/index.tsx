import React from 'react';
import SiteHeader from '../../components/Shareds/SiteHeader';
import HomeBanner from '../../components/Partials/Home/Banner';
import HomeProfiles from '../../components/Partials/Home/Profiles';
import Content from '../../components/Partials/Home/Content';

const Home = function () {
  return (
    <div className="Home">
      <SiteHeader />
      <HomeBanner />
      <Content
        mode="light"
        align="left"
        bannerUrl="/home--whatwedo.png"
        title={<h1>Title</h1>}
        content={
          <>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat voluptatum
              doloremque sequi magnam fuga adipisci at quae ut, odio nam vel deleniti neque est
              officiis aliquam quisquam placeat maxime veritatis.
            </p>
            <p>
              Nisi esse nulla quisquam architecto earum repudiandae blanditiis laudantium sit,
              facere, modi odit fugit quia laboriosam impedit molestias ea odio porro? Fuga harum
              impedit at ipsam quis ipsa quibusdam et.
            </p>
            <p>
              Expedita provident sunt iure cum porro! Vitae quidem deserunt est minus nemo nulla,
              delectus at expedita cum temporibus nostrum perspiciatis laudantium laborum id fugiat
              commodi facilis officia. Inventore, doloribus reiciendis!
            </p>
            <p>
              Minus dolorem veniam doloremque? Voluptatum quam suscipit illo facilis sapiente quis
              praesentium, distinctio velit voluptatem pariatur molestiae voluptas, officia possimus
              fugit optio ad aspernatur cumque? Dolorem minima itaque praesentium consectetur!
            </p>
            <p>
              Aut, repellat perferendis. Ex doloribus deserunt similique obcaecati officia sunt
              laborum ea, dolores eos voluptates repellat quasi aliquid sit corrupti porro provident
              magni quisquam! In veritatis voluptate quae soluta dolorum!
            </p>
          </>
        }
      />
      <Content
        mode="dark"
        align="right"
        bannerUrl="/home--banner.jpg"
        title={<h1>Title</h1>}
        content={
          <>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat voluptatum
              doloremque sequi magnam fuga adipisci at quae ut, odio nam vel deleniti neque est
              officiis aliquam quisquam placeat maxime veritatis.
            </p>
            <p>
              Nisi esse nulla quisquam architecto earum repudiandae blanditiis laudantium sit,
              facere, modi odit fugit quia laboriosam impedit molestias ea odio porro? Fuga harum
              impedit at ipsam quis ipsa quibusdam et.
            </p>
            <p>
              Expedita provident sunt iure cum porro! Vitae quidem deserunt est minus nemo nulla,
              delectus at expedita cum temporibus nostrum perspiciatis laudantium laborum id fugiat
              commodi facilis officia. Inventore, doloribus reiciendis!
            </p>
            <p>
              Minus dolorem veniam doloremque? Voluptatum quam suscipit illo facilis sapiente quis
              praesentium, distinctio velit voluptatem pariatur molestiae voluptas, officia possimus
              fugit optio ad aspernatur cumque? Dolorem minima itaque praesentium consectetur!
            </p>
            <p>
              Aut, repellat perferendis. Ex doloribus deserunt similique obcaecati officia sunt
              laborum ea, dolores eos voluptates repellat quasi aliquid sit corrupti porro provident
              magni quisquam! In veritatis voluptate quae soluta dolorum!
            </p>
          </>
        }
      />
      <HomeProfiles />
    </div>
  );
};

export default Home;
