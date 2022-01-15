/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './ContentItem.scss';

type TProps = {
  align: 'left' | 'right';
};

const ContentItem = function (props: TProps) {
  return (
    <section className="component is-content-item">
      <div className="container">
        <div className={`content-item--columns is-${props.align}`}>
          <div className="content-item--columns__item is-banner">
            <img src="https://www.belenco.com/images/urunler/spablacktas_256d7.jpg" alt="" />
          </div>
          <div className="content-item--columns__item is-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos unde alias obcaecati
              ipsam. Ullam tempora saepe aperiam facilis ea. Assumenda unde libero odio est
              laboriosam. Est, debitis autem. Fugiat, expedita.
            </p>
            <p>
              Quae voluptatem magnam atque. Ipsum animi laboriosam modi doloribus consequatur
              tenetur itaque rem laborum natus adipisci a delectus, pariatur est vel sequi
              blanditiis labore, dolorem velit quod, quia consequuntur ex!
            </p>
            <p>
              Excepturi obcaecati blanditiis quisquam eveniet cumque consequatur dignissimos? Fugit
              placeat blanditiis, repellendus laborum aspernatur minus alias incidunt culpa amet
              ipsam possimus, voluptatibus adipisci. Eos repudiandae harum, ducimus nihil vel
              sapiente.
            </p>
            <p>
              Magni quibusdam culpa corrupti dolores. Optio nesciunt cum, porro amet eum labore
              inventore quas eos maxime quis facilis mollitia modi perspiciatis corporis magni
              reprehenderit ab, dignissimos recusandae ipsa architecto tempore.
            </p>
            <p>
              Iusto cumque, cum iste expedita eligendi aperiam! Sint error magni iure necessitatibus
              commodi perspiciatis iusto harum exercitationem corporis assumenda hic quis, nulla,
              amet aliquam modi in quisquam! Est, vel quo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentItem;
