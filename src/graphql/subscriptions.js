/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganisation = /* GraphQL */ `
  subscription OnCreateOrganisation {
    onCreateOrganisation {
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
export const onUpdateOrganisation = /* GraphQL */ `
  subscription OnUpdateOrganisation {
    onUpdateOrganisation {
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
export const onDeleteOrganisation = /* GraphQL */ `
  subscription OnDeleteOrganisation {
    onDeleteOrganisation {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket {
    onCreateTicket {
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket {
    onUpdateTicket {
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket {
    onDeleteTicket {
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
