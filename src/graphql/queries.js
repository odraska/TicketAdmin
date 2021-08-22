/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrganisation = /* GraphQL */ `
  query GetOrganisation($id: ID!) {
    getOrganisation(id: $id) {
      id
      createdAt
      name
      status
      events {
        items {
          id
          createdAt
          name
          organisationID
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const listOrganisations = /* GraphQL */ `
  query ListOrganisations(
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganisations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        name
        status
        events {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      createdAt
      name
      organisationID
      organisation {
        id
        createdAt
        name
        status
        events {
          nextToken
        }
        updatedAt
      }
      tickets {
        items {
          id
          createdAt
          data
          eventID
          organisationID
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        name
        organisationID
        organisation {
          id
          createdAt
          name
          status
          updatedAt
        }
        tickets {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      id
      createdAt
      data
      eventID
      event {
        id
        createdAt
        name
        organisationID
        organisation {
          id
          createdAt
          name
          status
          updatedAt
        }
        tickets {
          nextToken
        }
        updatedAt
      }
      organisationID
      organisation {
        id
        createdAt
        name
        status
        events {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        data
        eventID
        event {
          id
          createdAt
          name
          organisationID
          updatedAt
        }
        organisationID
        organisation {
          id
          createdAt
          name
          status
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
