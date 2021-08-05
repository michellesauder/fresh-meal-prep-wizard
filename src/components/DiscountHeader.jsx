import React from 'react';

const DiscountHeader = ({ discount }) => {
  const style = `discount-container container is-max-desktop`;
  return (
      <div className={style}>
        <section class="hero is-primary is-small ">
          <div class="hero-body">
            {discount}
          </div>
        </section>
      </div>
  )

}

export default DiscountHeader
