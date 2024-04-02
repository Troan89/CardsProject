import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
  AvatarValues,
  NameValues,
  PersonalInformation,
} from '@/components/auth/personalInformation/personalInformation'
import { PageWrapper } from '@/components/ui/pageWrapper'
import { Spinner } from '@/components/ui/spinner'
import { ROUTES } from '@/router/router'
import { useGetMeQuery, useLogoutMutation, useUpdateProfileMutation } from '@/services/auth'

export const Profile = () => {
  const { data, isLoading } = useGetMeQuery()
  const [updateProfile] = useUpdateProfileMutation()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const handleAvatarUpdate = async (avatar: AvatarValues) => {
    const formData = new FormData()

    try {
      formData.append('avatar', avatar)
      const updateProfilePromise = updateProfile(formData).unwrap()

      await updateProfilePromise
    } catch (error) {
      toast.error('Failed to update avatar')
    }
  }

  const handleNameUpdate = async (data: NameValues) => {
    const formData = new FormData()

    try {
      formData.append('name', data.name)
      const updateProfilePromise = updateProfile(formData).unwrap()

      await updateProfilePromise
    } catch (error) {
      toast.error('Failed to update username')
    }
  }

  const logoutHandler = async () => {
    await logout()
      .unwrap()
      .then(() => navigate(ROUTES.login))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <PageWrapper>
      <PersonalInformation
        data={data}
        logout={logoutHandler}
        updateAvatar={handleAvatarUpdate}
        updateName={handleNameUpdate}
      />
    </PageWrapper>
  )
}
