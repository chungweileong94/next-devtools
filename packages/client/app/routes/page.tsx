'use client'

import React from 'react'
import useSWR from 'swr'
import { Skeleton } from '@/components/ui/skeleton'
import { rpcClient } from '../client'
import AllRoutes from './(components)/all-routes'
import CurrentRoute from './(components)/current-route'

export default function Page() {
  const { data, isLoading } = useSWR('getRoutes', () => rpcClient.getRoutes.query())

  return (
    <div>
      <CurrentRoute />
      {
        isLoading
          ? (
            <div>
              <div className="flex items-center space-x-4 p-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[450px]" />
                  <Skeleton className="h-4 w-[400px]" />
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[450px]" />
                  <Skeleton className="h-4 w-[400px]" />
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[450px]" />
                  <Skeleton className="h-4 w-[400px]" />
                </div>
              </div>
            </div>
            )
          : <AllRoutes data={data?.routes} />
      }
    </div>
  )
}
