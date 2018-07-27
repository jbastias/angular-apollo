import gql from 'graphql-tag';

export const allCoursesQuery = gql`
        query allCourses {
          allCourses {
            id
            title
            author
            description
            topic
            url
          }
        }`;

