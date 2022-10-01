import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  cryptoNewsApi,
  useGetCryptoNewsQuery,
  useLazyGetCryptoNewsQuery,
} from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Loader from "../Loader";
import { useDispatch } from "react-redux";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const [skip, setSkip] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const currNewsCount = simplified ? 6 : 12;
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const initialNewsQueryParams = {
    newsCategory,
    count: currNewsCount,
  };
  const { data: cryptoNews } = useGetCryptoNewsQuery(initialNewsQueryParams);
  const { data } = useGetCryptosQuery(100);
  const dispatch = useDispatch();
  const [getCryptoNewsTrigger] = useLazyGetCryptoNewsQuery();

  if (!cryptoNews?.value) return <Loader />;

  const fetchMoreCryptoNews = async () => {
    setSkip(skip + 1);
    try {
      const newNews = await getCryptoNewsTrigger({
        newsCategory,
        count: currNewsCount * skip,
      }).unwrap();
      const newNewsArray = [...newNews.value];
      newNewsArray.splice(0, (skip - 1) * currNewsCount);
      if (
        newNews.value.length === 0 ||
        newNews.value.length < currNewsCount * skip - 1
      )
        setHasMore(false);
      else setSkip(skip + 1);
      dispatch(
        cryptoNewsApi.util.updateQueryData(
          "getCryptoNews",
          initialNewsQueryParams,
          (draftNews) => {
            newNewsArray.map((temp) => draftNews.value.push(temp));
          }
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const cryptoNewsList = cryptoNews.value.map((news, i) => (
    <Card
      style={{
        margin: "5px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
      hoverable
      className={"news-card"}
      key={i}
    >
      <a href={news.url} target={"_blank"} rel={"noreferrer"}>
        <div className="news-image-container">
          <Title className={"news-title"} level={4}>
            {news.name}
          </Title>
          <img
            style={{ maxWidth: "200px", maxHeight: "100px" }}
            src={news?.image?.thumbnail?.contentUrl || demoImage}
            alt="news"
          />
        </div>
        <p>
          {news.description > 100
            ? `${news.description.substring(0, 100)} ...`
            : news.description}
        </p>
        <div className="provider-container">
          <div>
            <Avatar
              src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
              alt={"news"}
            />
            <Text className={"provider-name"}>{news.provider[0]?.name}</Text>
          </div>
          <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
        </div>
      </a>
    </Card>
  ));

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className={"select-news"}
            placeholder={"Select a Crypto"}
            optionFilterProp={"children"}
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value={"Cryptocurrency"}>Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      <InfiniteScroll
        dataLength={cryptoNews.value.length}
        hasMore={hasMore}
        next={fetchMoreCryptoNews}
        loader={<p>Loading...</p>}
        endMessage={<p>You've reached the end</p>}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cryptoNewsList}
        </div>
      </InfiniteScroll>
    </Row>
  );
};

export default News;
