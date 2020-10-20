import React from 'react'
import { jobs } from '../fixture'
import { useFavorites } from '../hooks/useFavorites'
import { Job, JobList, JobTimeType } from './JobList'
import { JobToggleFavorite } from './JobToggleFavorite'

const NUMBER_OF_RELATED_JOBS_VISIBLE = 3

const getRelatedJobs = (jobs: readonly Job[], referenceJob: Job) =>
  jobs.filter(
    (job) =>
      job !== referenceJob && job.mainCategory === referenceJob.mainCategory,
  )

const getDisplayTimeType = (timeType: JobTimeType) => {
  switch (timeType) {
    case 'fullTime':
      return 'Vollzeit'
    case 'partTime':
      return 'Teilzeit'
    default:
      console.warn('unknown timeType')
      return ''
  }
}

export const PageCareerDetails: React.FC<{
  id: string
}> = ({ id }) => {
  const job = jobs.find((job) => job.id === id)
  if (!job) {
    return <p>404</p>
  }
  const { title, city, url, timeType } = job
  const { isFavorite, toggleFavorite } = useFavorites()
  const relatedJobs = getRelatedJobs(jobs, job)
  const visibleRelatedJobs = relatedJobs.slice(
    0,
    NUMBER_OF_RELATED_JOBS_VISIBLE,
  )
  return (
    <main>
      <img
        src="//source.unsplash.com/random"
        alt=""
        width="400"
        height="400"
        style={{ objectFit: 'cover' }}
      />
      <h1>{title}</h1>
      <a href="/">Stellen bei enercity</a>
      <dl>
        <dt>Location</dt>
        <dd>{city}</dd>
        <dt>Typ</dt>
        <dd>{getDisplayTimeType(timeType)}</dd>
        <dt>Start</dt>
        <dd>Ab 01.08.2021</dd>
      </dl>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Jetzt bewerben!
      </a>
      <JobToggleFavorite
        isFavorite={isFavorite(id)}
        toggleFavorite={() => toggleFavorite(id)}
      />
      <br />
      <small>
        Das Geschlecht ist uns nicht wichtig, entscheident ist für uns, dass Du
        als Mitarbeiter zu unserer Kultur und ins Team passt und für Deinen Job
        brennst.
      </small>

      <br />
      <br />
      <br />
      <section>
        <h2>Entdecke mehr Jobs aus diesem Bereich</h2>
        <JobList
          isFavorite={isFavorite}
          jobs={visibleRelatedJobs}
          toggleFavorite={toggleFavorite}
        />
        <button>
          Weitere {relatedJobs.length - visibleRelatedJobs.length} Jobs anzeigen
        </button>
      </section>
    </main>
  )
}
