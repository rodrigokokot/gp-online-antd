import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "antd";
import FilterComponent from "../../molecules/FilterComponent";

function Filter() {

  const [isModalVisible, setIsModalVisible] = useState(false);
 
  return (
    <div style={{ float: "right" }}>
      <Button
        onClick={() => setIsModalVisible(true)}
        style={{ borderColor: "#FFFFFF" }}
      >
        {
          <svg
            width="70"
            height="23"
            viewBox="0 0 70 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2096 1.91797H4.79297C4.03047 1.91797 3.2992 2.22087 2.76004 2.76004C2.22087 3.2992 1.91797 4.03047 1.91797 4.79297V5.91422C1.91783 6.30996 1.99939 6.70146 2.15755 7.06422V7.12172C2.29295 7.42932 2.48472 7.70885 2.72297 7.94589L8.6263 13.8109V20.1263C8.62598 20.2892 8.66716 20.4494 8.74597 20.592C8.82478 20.7345 8.93861 20.8546 9.07672 20.9409C9.22923 21.0354 9.40521 21.0852 9.58464 21.0846C9.73466 21.0837 9.88237 21.0476 10.0159 20.9792L13.8492 19.0626C14.0073 18.9829 14.1402 18.8611 14.2332 18.7105C14.3262 18.56 14.3758 18.3866 14.3763 18.2096V13.8109L20.2413 7.94589C20.4796 7.70885 20.6713 7.42932 20.8067 7.12172V7.06422C20.9781 6.7043 21.0727 6.31267 21.0846 5.91422V4.79297C21.0846 4.03047 20.7817 3.2992 20.2426 2.76004C19.7034 2.22087 18.9721 1.91797 18.2096 1.91797ZM12.7376 12.7376C12.6487 12.8271 12.5785 12.9333 12.5308 13.0501C12.4831 13.1668 12.4589 13.2918 12.4596 13.418V17.6155L10.543 18.5738V13.418C10.5437 13.2918 10.5195 13.1668 10.4718 13.0501C10.4241 12.9333 10.3539 12.8271 10.2651 12.7376L5.18589 7.66797H17.8167L12.7376 12.7376ZM19.168 5.7513H3.83464V4.79297C3.83464 4.5388 3.9356 4.29505 4.11533 4.11533C4.29505 3.9356 4.5388 3.83464 4.79297 3.83464H18.2096C18.4638 3.83464 18.7076 3.9356 18.8873 4.11533C19.067 4.29505 19.168 4.5388 19.168 4.79297V5.7513Z"
              fill="#313131"
            />
            <path
              d="M36.367 7.621V10.204H39.853V12.031H36.367V16H33.987V5.801H40.553V7.621H36.367ZM43.6037 8.741V16H41.4337V8.741H43.6037ZM43.8277 6.753C43.8277 6.92567 43.7927 7.089 43.7227 7.243C43.6527 7.39233 43.557 7.52533 43.4357 7.642C43.3144 7.754 43.172 7.845 43.0087 7.915C42.85 7.98033 42.6797 8.013 42.4977 8.013C42.3204 8.013 42.1547 7.98033 42.0007 7.915C41.8467 7.845 41.709 7.754 41.5877 7.642C41.471 7.52533 41.3777 7.39233 41.3077 7.243C41.2424 7.089 41.2097 6.92567 41.2097 6.753C41.2097 6.57567 41.2424 6.41 41.3077 6.256C41.3777 6.102 41.471 5.96667 41.5877 5.85C41.709 5.73333 41.8467 5.64233 42.0007 5.577C42.1547 5.51167 42.3204 5.479 42.4977 5.479C42.6797 5.479 42.85 5.51167 43.0087 5.577C43.172 5.64233 43.3144 5.73333 43.4357 5.85C43.557 5.96667 43.6527 6.102 43.7227 6.256C43.7927 6.41 43.8277 6.57567 43.8277 6.753ZM47.0071 5.521V16H44.8371V5.521H47.0071ZM50.7908 16.112C50.4455 16.112 50.1398 16.063 49.8738 15.965C49.6125 15.8623 49.3908 15.72 49.2088 15.538C49.0315 15.3513 48.8962 15.1273 48.8028 14.866C48.7095 14.6047 48.6628 14.313 48.6628 13.991V10.239H48.0468C47.9348 10.239 47.8392 10.204 47.7598 10.134C47.6805 10.0593 47.6408 9.952 47.6408 9.812V8.965L48.7958 8.741L49.2228 6.97C49.2788 6.746 49.4375 6.634 49.6988 6.634H50.8328V8.755H52.6318V10.239H50.8328V13.844C50.8328 14.012 50.8725 14.152 50.9518 14.264C51.0358 14.3713 51.1548 14.425 51.3088 14.425C51.3882 14.425 51.4535 14.418 51.5048 14.404C51.5608 14.3853 51.6075 14.3667 51.6448 14.348C51.6868 14.3247 51.7242 14.306 51.7568 14.292C51.7942 14.2733 51.8362 14.264 51.8828 14.264C51.9482 14.264 51.9995 14.2803 52.0368 14.313C52.0788 14.341 52.1208 14.3877 52.1628 14.453L52.8208 15.482C52.5408 15.692 52.2258 15.8507 51.8758 15.958C51.5258 16.0607 51.1642 16.112 50.7908 16.112ZM55.3169 9.861C55.5409 9.469 55.7975 9.161 56.0869 8.937C56.3809 8.713 56.7169 8.601 57.0949 8.601C57.4215 8.601 57.6875 8.678 57.8929 8.832L57.7529 10.428C57.7295 10.5307 57.6899 10.6007 57.6339 10.638C57.5825 10.6753 57.5102 10.694 57.4169 10.694C57.3795 10.694 57.3305 10.6917 57.2699 10.687C57.2092 10.6823 57.1462 10.6777 57.0809 10.673C57.0155 10.6637 56.9479 10.6567 56.8779 10.652C56.8125 10.6427 56.7519 10.638 56.6959 10.638C56.3785 10.638 56.1242 10.722 55.9329 10.89C55.7462 11.058 55.5875 11.2913 55.4569 11.59V16H53.2869V8.741H54.5749C54.6822 8.741 54.7709 8.75033 54.8409 8.769C54.9155 8.78767 54.9762 8.818 55.0229 8.86C55.0742 8.89733 55.1115 8.94867 55.1349 9.014C55.1629 9.07933 55.1862 9.15867 55.2049 9.252L55.3169 9.861ZM62.0292 13.046C61.5952 13.0647 61.2382 13.102 60.9582 13.158C60.6782 13.214 60.4566 13.284 60.2932 13.368C60.1299 13.452 60.0156 13.5477 59.9502 13.655C59.8896 13.7623 59.8592 13.879 59.8592 14.005C59.8592 14.2523 59.9269 14.4273 60.0622 14.53C60.1976 14.628 60.3959 14.677 60.6572 14.677C60.9372 14.677 61.1822 14.628 61.3922 14.53C61.6022 14.432 61.8146 14.2733 62.0292 14.054V13.046ZM58.1232 9.749C58.5619 9.36167 59.0472 9.07467 59.5792 8.888C60.1159 8.69667 60.6899 8.601 61.3012 8.601C61.7399 8.601 62.1342 8.67333 62.4842 8.818C62.8389 8.958 63.1376 9.15633 63.3802 9.413C63.6276 9.665 63.8166 9.966 63.9472 10.316C64.0779 10.666 64.1432 11.0487 64.1432 11.464V16H63.1492C62.9439 16 62.7876 15.972 62.6802 15.916C62.5776 15.86 62.4912 15.7433 62.4212 15.566L62.2672 15.167C62.0852 15.321 61.9102 15.4563 61.7422 15.573C61.5742 15.6897 61.3992 15.79 61.2172 15.874C61.0399 15.9533 60.8486 16.0117 60.6432 16.049C60.4426 16.091 60.2186 16.112 59.9712 16.112C59.6399 16.112 59.3389 16.07 59.0682 15.986C58.7976 15.8973 58.5666 15.769 58.3752 15.601C58.1886 15.433 58.0439 15.2253 57.9412 14.978C57.8386 14.726 57.7872 14.4367 57.7872 14.11C57.7872 13.8487 57.8526 13.585 57.9832 13.319C58.1139 13.0483 58.3402 12.8033 58.6622 12.584C58.9842 12.36 59.4182 12.1733 59.9642 12.024C60.5102 11.8747 61.1986 11.7907 62.0292 11.772V11.464C62.0292 11.0393 61.9406 10.7337 61.7632 10.547C61.5906 10.3557 61.3432 10.26 61.0212 10.26C60.7646 10.26 60.5546 10.288 60.3912 10.344C60.2279 10.4 60.0809 10.463 59.9502 10.533C59.8242 10.603 59.7006 10.666 59.5792 10.722C59.4579 10.778 59.3132 10.806 59.1452 10.806C58.9959 10.806 58.8699 10.7687 58.7672 10.694C58.6646 10.6193 58.5806 10.5307 58.5152 10.428L58.1232 9.749ZM67.2803 9.861C67.5043 9.469 67.761 9.161 68.0503 8.937C68.3443 8.713 68.6803 8.601 69.0583 8.601C69.385 8.601 69.651 8.678 69.8563 8.832L69.7163 10.428C69.693 10.5307 69.6533 10.6007 69.5973 10.638C69.546 10.6753 69.4736 10.694 69.3803 10.694C69.343 10.694 69.294 10.6917 69.2333 10.687C69.1726 10.6823 69.1096 10.6777 69.0443 10.673C68.979 10.6637 68.9113 10.6567 68.8413 10.652C68.776 10.6427 68.7153 10.638 68.6593 10.638C68.342 10.638 68.0876 10.722 67.8963 10.89C67.7096 11.058 67.551 11.2913 67.4203 11.59V16H65.2503V8.741H66.5383C66.6456 8.741 66.7343 8.75033 66.8043 8.769C66.879 8.78767 66.9396 8.818 66.9863 8.86C67.0376 8.89733 67.075 8.94867 67.0983 9.014C67.1263 9.07933 67.1496 9.15867 67.1683 9.252L67.2803 9.861Z"
              fill="#313131"
            />
          </svg>
        }
      </Button>

      <Modal
        className="search-date-range"
        closable={false}
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        width={1000}
      >
        <Row gutter={20}>
          <Col className="gutter-row" span={16}>
            <Card
              style={{
                height: "400px",
                width: "1000px",
                left: "0px",
                top: "40px",
              }}
            >
              <FilterComponent></FilterComponent>
            </Card>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default Filter;
