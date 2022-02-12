import React from 'react'
import Event from '../components/Event'
import Recommendation from '../components/Recommendation'

export default function SubmissionList({ submissions }) {
    return submissions.map((sub, index) => {
        switch (sub.category) {
            case 'event':
                return <Event key={index} title={sub.title} description={sub.description} submitter={sub.submitter} />
            case 'recommendation':
                return <Recommendation key={index} name={sub.name} description={sub.description} location={sub.location} submitter={sub.submitter} />
            default:
                return null
        }
    })
}
