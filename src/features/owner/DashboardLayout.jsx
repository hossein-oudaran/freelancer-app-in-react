import DashboardHeader from '../../ui/DashboardHeader'
import Loading from '../../ui/Loading'
import useOwnerProjects from '../Projects/useOwnerProjects'
import Stats from './Stats'

function DashboardLayout() {
    const {projects,isLoading} = useOwnerProjects()
    if (isLoading) return <Loading/>
  return (
    <div>
      <DashboardHeader/>
      <Stats projects={projects}/>
    </div>
  )
}

export default DashboardLayout