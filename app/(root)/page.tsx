import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { getCurrentUser, getInterviewById, getLatestInterviews } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = async() => {
  const user = await getCurrentUser();
  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewById(user?.id!),
    await getLatestInterviews({userId: user?.id!}),

  ])
  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpCommingInterviews = latestInterviews?.length > 0
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Intevire-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions & get instant feeback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-due"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
        {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You have not taken any interview yet.</p>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {hasUpCommingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>There are no new interviews available.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Page