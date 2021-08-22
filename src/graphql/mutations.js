/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganisation = /* GraphQL */ `
  mutation CreateOrganisation(
    $input: CreateOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    createOrganisation(input: $input, condition: $condition) {
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
export const updateOrganisation = /* GraphQL */ `
  mutation UpdateOrganisation(
    $input: UpdateOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    updateOrganisation(input: $input, condition: $condition) {
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
export const deleteOrganisation = /* GraphQL */ `
  mutation DeleteOrganisation(
    $input: DeleteOrganisationInput!
    $condition: ModelOrganisationConditionInput
  ) {
    deleteOrganisation(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
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
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
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
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
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
