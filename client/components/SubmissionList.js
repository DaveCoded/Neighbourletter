import React from 'react'
import Event from '../components/Event'
import Recommendation from '../components/Recommendation'

export default function SubmissionList({ submissions, changeStatus }) {
    return submissions.map((sub, index) => {
        switch (sub.category) {
            case 'event':
                return <Event key={index} title={sub.title} description={sub.description} submitter={sub.submitter} changeStatus={changeStatus} id={sub.id} />
            case 'recommendation':
                return <Recommendation key={index} title={sub.title} description={sub.description} location={sub.location} submitter={sub.submitter} changeStatus={changeStatus} id={sub.id} />
            default:
                return null
        }
    })
}
