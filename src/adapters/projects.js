import { getTitleFrom } from '../logic/data'
import { getImgUrl } from '../config/constants'


const TITLE_INITIAL_CHAR = '1'
export function mapProjectsToUI (projects) {
  return projects
    ?.filter(({ description, topics }) => description && topics)
    ?.map(({ id, description, topics, name, html_url, homepage }) => (
      {
        id: id,
        title: getTitleFrom(topics.find(topic => topic[0] === TITLE_INITIAL_CHAR)),
        description: description,
        imgUrl: getImgUrl(name),
        tags: topics.filter(topic => topic[0] !== TITLE_INITIAL_CHAR),
        repoUrl: html_url,
        pageUrl: homepage,
      }
    ))
}