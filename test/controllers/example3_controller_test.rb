require "test_helper"

class Example3ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get example3_index_url
    assert_response :success
  end
end
